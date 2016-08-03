var songs = [];



function grabSongs(){
    
     var url = $("#spotify").val();
    console.log(url);
     $.get("http://flip-flop.us/page_grabber.php",{PAGE:url.split("https://")[1]},
           function(e){
               // console.log(e);
         
                window.setTimeout(stopLoad,10);
               // console.log(e);
                document.getElementById('scanner').srcdoc = e;
                
            
            });
}

function stopLoad(){
              
           console.log("fin");
           window.frames[0].stop();
           compileList();
              
}

function compileList(){
    var iframe = $("#scanner").contents();
    var songNames = $("li > .name  .track-name",iframe);
    var s = [];
    songNames.each(function(){
        s.push($(this).text());
    });
    
    var artistNames = $("li > .name  .artists-albums",iframe);
    var a = [];
    artistNames.each(function(){
        a.push($(this).text().split(String.fromCharCode(8226))[0]);
    });
    
    for(var x in s){
        songs.push({artist:a[x].trim(),song:s[x].trim()});
    }
    
    console.log(songs);
    
   
}

function removeSpace(word){
    var myWord = word,
        replace = myWord.replace(/[ ]/g, "");
    replace = replace.replace(/[:]/g, "");
    replace = replace.replace(/[-]/g, "");
    replace = replace.replace(/["]/g, "");
    replace = replace.replace(/[']/g, "");
    replace = replace.replace(/[.]/g, "");
    replace = replace.replace(/[(]/g, "");
    replace = replace.replace(/[)]/g, "");
    replace = replace.replace(/[?]/g, "");
    replace = replace.replace(/[#]/g, "");
    replace = replace.replace(/[&]/g, "");
    return replace;
}