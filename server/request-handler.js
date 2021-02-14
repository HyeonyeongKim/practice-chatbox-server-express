let data = {"results" : []};

const requestHandler = function(request, response){
    const headers = defaultCorsHeaders;
    headers["Content-Type"] = "text/plain";// 응답헤더는 응답하는 컨텐츠의 자료 타입을 헤더에 기록한다.

if(request.method === "OPTIONS"){
    response.writeHead(200, headers);
    response.end();
}

else if(request.url ==="/messages" && request.method === "GET"){
    response.writeHead(200, headers);
    response.end(JSON.stringify(data))
}
else if(request.url === "/messages" && request.method === "POST"){
    response.writeHead(201, headers);

    let body = [];
    request.on('data', (chunk) => 
    body.push(chunk)).on('end', () => {
        body = Buffer.concat(body).toString();
    
        data.results.push(JSON.parse(body)) //현재 body는 json형식이므로 객체로 변환한 뒤 results에 푸쉬한다.
        response.end(JSON.stringify(body)) // json문자열로 변환하여 응답한다.
    })
}
else{
    response.writeHead(404, headers)
    response.end();
}
}

const defaultCorsHeaders = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10 // Seconds.
  };

  module.exports = requestHandler;