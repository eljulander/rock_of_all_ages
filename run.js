
        
        function process(){
                var lyrics = getSongLyrics();
                $("#lyricsBox").text(lyrics);
            songs[i]["lyrics"] = lyrics;
            console.log(lyrics);
            
            i++;
            if(i < songs.length)
                window.setTimeout(start,10);
            
            //alert("DONE");
        }
        
        
        var i = 0;

        function check(){
            i = 0;
            start();
        }

        function start(){
             var artist = songs[i].artist;
                var song = songs[i].song;
                console.log(song,artist);
                
                $.get("http://flip-flop.us/page_grabber.php",{PAGE:`www.azlyrics.com/lyrics/${removeSpace(artist).toLowerCase()}/${removeSpace(song).toLowerCase()}.html`},function(e){
                    console.log(`www.azlyrics.com/lyrics/${removeSpace(artist).toLowerCase()}/${removeSpace(song).toLowerCase()}.html`);
                    //$("#scanner").attr("onload","process()");
                    window.setTimeout(stop,15);
                    console.log("Continues");
                    document.getElementById('scanner').srcdoc = e;
                    
                
                });
            
        }
          
        function stop(){
            
            console.log("fin");
            window.frames[0].stop();
            process();
              
        }
        
        function getSongLyrics(){
            var lyrics ="";
            var iframe = $("#scanner").contents();
            lyrics  = $(".ringtone+b+br+br+div",iframe).text();
            
            return lyrics;
        }
        
    