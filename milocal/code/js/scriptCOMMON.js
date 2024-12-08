           
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
                const htmlId = document.documentElement.id;  // `document.documentElement` refers to the <html> element
                //alert('setTheme set page: '+pSavedTheme);
                if (pSavedTheme=='dark-mode') {
                    //localStorage.setItem('theme', 'dark-mode');
                    document.body.style.backgroundColor = "black";
                    document.body.style.color = "white";
                    changeSVGs("white");
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
                    changeSVGs("black");
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
                greyColor = 'grey';
                const svgs = document.querySelectorAll('svg');

                svgs.forEach((svg, index) => {
                    // Get the current fill attribute
                    let currentFill = svg.getAttribute('fill');

                    // Check if the current fill is grey
                    if (currentFill !== greyColor) {
                        // If it's not grey, set the new color
                        svg.setAttribute('fill', pColor);
                    }
                });
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
            function otherFuncAfterAJAX() {
                //alert('other');
                //cambiarEstilo();
                actualizarImagen();
                setPage();
                changePage(1,'carousel-content-services',v_services_values);
                changePage(1,'carousel-content-promos',v_promo_values);
            }            
