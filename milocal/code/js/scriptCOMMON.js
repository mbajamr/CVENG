           
            const htmlId = document.documentElement.id;  // `document.documentElement` refers to the <html> element
            greyColor = 'grey';

            function setPage() {
                vSavedTheme = getTheme();
                //alert('setPge vSavedTheme: '+vSavedTheme);
                setTheme(vSavedTheme);
            }

            function swichTheme(pSavedTheme) {
                if (pSavedTheme == 'dark-mode') {
                  localStorage.setItem('theme', 'light-mode');
                  document.body.classList.remove('dark-mode');
                  document.body.classList.add('light-mode');  
                } else {
                  localStorage.setItem('theme', 'dark-mode');
                  document.body.classList.remove('light-mode');
                  document.body.classList.add('dark-mode');
              }
            }

            function getTheme() {
                const getSavedTheme = localStorage.getItem('theme');
                //alert('getSavedTheme s: '+getSavedTheme);
                
                if (getSavedTheme) {
                  return getSavedTheme;
                } else {
                  return 'no-theme';
                }
            }

            function setTheme(pSavedTheme) {                
                //alert('setTheme set page: '+pSavedTheme);
                const body = document.body; 
                if (pSavedTheme=='dark-mode') {
                    //localStorage.setItem('theme', 'dark-mode');
                    document.body.style.backgroundColor = "black";
                    document.body.style.color = "white";
                    body.classList.toggle('dark-mode'); 
                    changeSVGs("white");
                    changeLINKs("cyan","lavender");
                    //changeTBLs("white","white");
                    if (htmlId == "pages") {
                        changeBorderColor("white");
                    }
                    //document.body.classList.remove('light-mode');
                    //document.body.classList.add('dark-mode');
                    
                } else {
                    //localStorage.setItem('theme', 'light-mode');
                    document.body.style.backgroundColor = "white";
                    document.body.style.color = "black";
                    body.classList.toggle('light-mode');
                    changeSVGs("black");
                    changeLINKs("blue","purple");
                    //changeTBLs("black","black");
                    if (htmlId == "pages") {
                        changeBorderColor("black");
                    }
                    //document.body.classList.remove('dark-mode');
                    //document.body.classList.add('light-mode');
                    
                }
            }

            function changeSVGs(pColor) {
                //alert('change svg : '+pColor);
                
                const svgs = document.querySelectorAll('svg');

                svgs.forEach((svg, index) => {
                    let svgId = svg.getAttribute('id');

                    // Get the current fill attribute
                    let currentFill = svg.getAttribute('fill');

                    // Check if the current fill is grey
                    if (currentFill !== greyColor) {
                        // If it's not grey, set the new color
                        svg.setAttribute('fill', pColor);
                    }
                });
            }

            function changeLINKs(plinkNoVisited,plinkVisited,) {

                var links = document.getElementsByTagName("a");
                for(var i=0;i<links.length;i++)
                {
                    if(links[i].href)
                    {
                        links[i].style.color = plinkNoVisited;  
                    }
                }  
               
                var links = document.getElementsByTagName("a:visited");
                for(var i=0;i<links.length;i++)
                {
                    if(links[i].href)
                    {
                        links[i].style.color = plinkVisited;  
                    }
                } 
            }

            function changeTBLs(pColorTD,pColorTH) {
                const tbls = document.getElementById('schedule_table');
                const tbls2 = document.querySelectorAll('table');

                 //tbls.forEach(function(table) {
                    tbls.style.border = "2px solid #007BFF";
                    tbls.style.backgroundColor = "#f0f8ff";
                    tbls.style.color = "#007BFF";
                    tbls.querySelectorAll('th').forEach(th => {
                      th.style.backgroundColor = "#007BFF";
                      th.style.color = "white";
                    });
                    tbls.querySelectorAll('td').forEach(td => {
                      td.style.backgroundColor = "#e7f3ff";
                    });
                //});
            }

            function cambiarEstilo() {
                mySavedTheme = getTheme();
                //alert('cambiar el estilo actual: '+mySavedTheme);
                swichTheme(mySavedTheme);
                mySavedTheme = getTheme();
                //alert('cambiado estilo: '+mySavedTheme);
                setTheme(mySavedTheme);

                //if (mySavedTheme=='dark-mode') {
                //    setTheme('light-mode');
                //} else {
                //    setTheme('dark-mode');
                //}
            }

            // Onload
            function otherFuncAfterAJAX(pcelda) {
                //alert('other');
                //cambiarEstilo();
                if (htmlId == "pages") {
                    actualizarImagen();
                    if (pcelda=='SERVICES') {
                        changePage(1,'carousel-content-services',v_services_values);
                    }
                    if (pcelda=='PROMOS') {
                        changePage(1,'carousel-content-promos',v_promo_values);
                    }
                    if (pcelda=='PICS') {
                        changePage(1,'carousel-content-pics',v_pics_values);
                    }
                }
                setPage();
            }            

            // Function to check if the section exists and grey out the SVG icon
            function checkSectionAndGreyOut(pcelda) {
                pceldasec = pcelda + "SEC";
                //alert("celda"+pceldasec);
                var section = document.getElementById(pceldasec); // Check for the section
                //var svgIcon = document.getElementById('knowus'); // SVG icon (button)
                //alert("sec1 "+section);
                //alert(svgIcon);

                if (!section) {
                    //alert("sec2 "+section);
                    let pceldaL = pcelda.toLowerCase();
                    const svgCelda = document.getElementById(pceldaL);
                    //alert("svgCelda:  "+svgCelda);
                    // Section not found, grey out the SVG icon
                    svgCelda.style.fill = greyColor; // Change the fill color to grey
                    //svgCelda.setAttribute('fill', 'grey';);
                    //svgIcon.style.pointerEvents = 'none'; // Optionally disable clicks
                }
            }
