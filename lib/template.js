module.exports =  {
    html:function (title, list, description,control){
        var templete=`
                    <!doctype html>
                            <html>
                            <head>
                                <title>WEB-Good - ${title}</title>
                            <meta charset="utf-8">
                            </head>
                            <body>
                                <h1><a href="/">WEB</a></h1>
                                ${list}
                                ${control}
                                <h2>${title}</h2>
                                ${description}
                            </body>
                            </html>
                        `;
            return templete;
        },
        
    list:function(fileList){
            var list = `<ul>`;
            var i = 0;
            while( i < fileList.length){
                list = list + `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
                i = i+1;
                }
            list = list +`</ul>`;
            return list
        }
    }

// module.exports = template;