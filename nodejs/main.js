var http = require('http');
var url =  require('url');
var fs = require('fs');
var qs = require('querystring');

var server = http.createServer(function(request,response){
    var _url = request.url;
    var querydata = url.parse(_url,true).query;
    var pathname = url.parse(_url,true).pathname;
    //var title = querydata.id;
    function templateHTML(title, list, description){
        var templete=`
                    <!doctype html>
                        <html>
                        <head>
                            <title>WEB1 - ${title}</title>
                        <meta charset="utf-8">
                        </head>
                        <body>
                            <h1><a href="/">WEB</a></h1>
                            ${list}
                            <a href="/create">create</a>
                            <h2>${title}</h2>
                            ${description}
                        </body>
                        </html>
                    `;
        return templete;
    }

    function templateList(fileList){
        var list = `<ul>`;
        var i = 0;
        while( i < fileList.length){
            list = list + `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
            i = i+1;
            }
        list = list +`</ul>`;
        return list
    }


    if(pathname === '/' ){
        console.log(querydata);
        if(querydata.id === undefined){
            fs.readdir('./data',function(err,fileList){
                var title = 'Welcome';
                var description = "Hello Node.js ";

                var list = templateList(fileList);
                var template = templateHTML(title,list,description);
                response.writeHead(200);
                response.end(template);
            });
            
        }else{
            fs.readdir('./data',function(err,fileList){
                var title = querydata.id;
    
                fs.readFile(`./data/${querydata.id}`,'utf8',function(err,description){

                    var list = templateList(fileList);
                    var template = templateHTML(title,list,description);
                    response.writeHead(200);
                    response.end(template);

                });
                
            });
        }

    }else if(pathname === '/create'){
        fs.readdir('./data',function(err,fileList){
            var title = 'Create Web';
            var description = "Hello Node.js ";

            var list = templateList(fileList);
           // var template = templateHTML(title,list,description);
           var template = templateHTML(title,list,`
            <form action="http://localhost:3000/process_create" method="POST">
                <p><input type="text" name="title" placeholder="description"></p>
                <p>
                    <textarea name="description" placeholder="description"></textarea>
                </p>
                <p>
                    <input type="submit">
                </p>
            </form>`);
            response.writeHead(200);
            response.end(template);
        });
    }else if(pathname === '/process_create'){
        // var body='';
        // request.on('data',function(data){
        //     body = body + data;
        // });
        // request.on('end',function(){
        //     var post = qs.parse(body);
        //     console.log(post);
        // });

        response.writeHead(200);
        response.end('ok');
    }else{
        response.writeHead(404);
        response.end('Not found');
    }

    
    // var template=`
    // <!doctype html>
    //     <html>
    //     <head>
    //     <title>WEB1 - ${title}</title>
    //     <meta charset="utf-8">
    //     </head>
    //     <body>
    //     <h1><a href="/">WEB</a></h1>
    //     <ol>
    //         <li><a href="/?id=HTML">HTML</a></li>
    //         <li><a href="/?id=CSS">CSS</a></li>
    //         <li><a href="/?id=JavaScript">JavaScript</a></li>
    //     </ol>
    //     <h2>${title}</h2>
    //     <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
    //     <img src="coding.jpg" width="100%">
    //     </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
    //     </p>
    //     </body>
    //     </html>
    // `;


}); 

server.listen(3000);
console.log("Server On");
