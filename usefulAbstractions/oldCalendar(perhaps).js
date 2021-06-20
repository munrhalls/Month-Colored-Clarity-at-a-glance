

  // CALENDAR
  // const calendar = document.getElementsByClassName('calendar')[0];
  // const calendarCarousel = createCalendarCarousel();
  // calendar.style.flex = '1';
  // calendarCarousel.style.height = '100%';
  // calendar.appendChild(calendarCarousel);

  // function createCalendarCarousel() {
  //   let calendarCarousel = document.createElement('div');
  //   calendarCarousel.id = 'calendarCarousel';
  //   calendarCarousel.style.display = 'flex';
  //   calendarCarousel.style.height = '100%';



  //   let table = document.createElement('div');
  //   table.style.display = 'flex';
  //   table.style.flex = '1';
  //   table.style.height = heightCalendar;
  //   table.style.width = '100%';


  //   function content_calendar() {
  //     const year = document.createElement('div');
  //     year.style.display = 'flex';
  //     year.style.flex = '1';
  //     year.style.height = '100%';

  //     for (let i = 0; i < DATA_Calendar.length; i++) {
  //       let monthDATA = DATA_Calendar[i];



  //       // MONTHS LEVEL
  //       let month = document.createElement('div');
  //       month.id = 'month';
  //       month.style.display = 'flex';
  //       month.style.flex = '1';
  //       month.style.height = '100%';



  //       let monthTitle = document.createElement('div');
  //       monthTitle.innerText = monthDATA.code;
  //       monthTitle.style.textAlign = 'left';
  //       monthTitle.style.fontSize = calendarMonthTitleFontSize;
  //       monthTitle.style.padding = paddingTitle;
  //       monthTitle.style.height = calendarMonthTitleHeight;



  //       let monthDays = document.createElement('div');
  //       monthDays.className = 'month';
  //       monthDays.style.display = 'flex';
  //       monthDays.style.flex = '1';
  //       monthDays.style.justifyContent = 'flex-start';
  //       monthDays.style.height = 'calc(100% - ' + parseFloat(calendarMonthTitleHeight) + 'rem)';



  //       for (let j = 0; j < monthDATA.length; j++) {
  //         let weekDATA = monthDATA[j];



  //         // WEEKS LEVEL
  //         let week = document.createElement('div');
  //         week.id = 'week';
  //         week.style.display = 'flex';
  //         week.style.flex = '1';
  //         week.style.height = '100%';



  //         let weekTitle = document.createElement('div');
  //         weekTitle.style.textAlign = 'center';
  //         weekTitle.style.height = '100%';
  //         weekTitle.style.color = '#ffffff';
  //         weekTitle.style.background = '#000000';
  //         weekTitle.innerText = weekDATA.code;
  //         weekTitle.style.paddingBottom = '0.5rem'
  //         week.appendChild(weekTitle);
  //         monthDays.appendChild(week)



  //         let dayInterface = document.createElement('div');
  //         dayInterface.id = 'dayInterface';
  //         dayInterface.style.display = 'flex';
  //         dayInterface.style.flex = '1';
  //         dayInterface.style.height = '100%';



  //         for (let y = 0; y < weekDATA.length; y++) {
  //           let dayName = weekDATA[y];
  //           dayName = dayName.substring(0, 3);



  //           // DAYS LEVEL
  //           let day = document.createElement('div');
  //           day.style.flex = '1';
  //           day.className = 'day';
  //           day.innerText = dayName;
  //           day.style.borderLeft = '1px solid #000000';
  //           if (y + 1 == weekDATA.length) {
  //             day.style.borderRight = '1px solid #000000';
  //           }



  //           // INSIDE DAY LEVEL
  //           let addHourBtn = document.createElement('div');
  //           addHourBtn.innerText = '+';
  //           let containerHours = document.createElement('div');
  //           containerHours.className = 'containerHours';
  //           containerHours
  //           day.appendChild(containerHours);



  //           // SUM
  //           let sum = document.createElement('div');
  //           sum.className = 'sum';
  //           let hours = day.getElementsByClassName('hourEl');
  //           sum.innerText = hours.length;
  //           sum.style.background = '#000000';
  //           sum.style.color = '#ffffff';
  //           sum.style.textAlign = 'center';
  //           sum.style.height = '1.75rem';
  //           sum.style.fontSize = '1.5rem';



  //           // COLOR MARKING HOURS
  //           function handleMarkingProject() {
  //             let hourTick = resourceCreateHourTick();
  //             hourTick.className = 'hourEl';
  //             containerHours.appendChild(hourTick);
  //             // coords
  //             hourTick.addEventListener('requestCoords', function (e) {
  //               let hourEl = e.target;
  //               let markerEl = e.markerEl;
  //               let hRect = hourEl.getBoundingClientRect();
  //               let mRect = markerEl.getBoundingClientRect();
  //               let matchY = false;
  //               let matchX = false;
  //               // Why? Negation leaves points subsets that cannot not intersect.
  //               let topNotAfterHourBottom = !(mRect.top > hRect.bottom);
  //               let BottomNotBeforeHourTop = !(mRect.bottom < hRect.top);
  //               let leftNotAfterHourRight = !(mRect.left > hRect.right);
  //               let rightNotBeforeHourLeft = !(mRect.right < hRect.left);
  //               // Check match.
  //               if (topNotAfterHourBottom && BottomNotBeforeHourTop) {
  //                 matchY = true;
  //               }
  //               if (leftNotAfterHourRight && rightNotBeforeHourLeft) {
  //                 matchX = true;
  //               }
  //               let match = matchY && matchX;
  //               // Mark match.
  //               if (match) {
  //                 hourEl.style.background = markerEl.projectColor;

  //               }
  //             }, false);
  //           }



  //           // BUTTONS 
  //           let containerButtons = document.createElement('containerButtons');
  //           containerButtons.className = 'containerButtons';
  //           containerButtons.style.display = 'flex';



  //           addHourBtn.onclick = function () {
  //             // HOUR LEVEL
  //             handleMarkingProject();
  //             let hours = day.getElementsByClassName('hourEl');
  //             sum.innerText = hours.length;
  //           }
  //           addHourBtn.style.height = '1.5rem';
  //           addHourBtn.style.flex = '1';
  //           addHourBtn.style.fontSize = '1.5rem';
  //           addHourBtn.style.textAlign = 'center';
  //           addHourBtn.style.color = '#fff';
  //           addHourBtn.style.background = '#000';
  //           addHourBtn.style.textAlign = 'center';
  //           addHourBtn.style.cursor = 'pointer';



  //           let minusHourBtn = document.createElement('div');
  //           minusHourBtn.innerText = '-';
  //           minusHourBtn.onclick = function () {
  //             let hours = day.getElementsByClassName('hourEl');
  //             if (hours && hours.length) {
  //               let hour = hours[hours.length - 1];
  //               containerHours.removeChild(hour);
  //               sum.innerText = hours.length;
  //             }
  //           }
  //           minusHourBtn.style.height = '1.5rem';
  //           minusHourBtn.style.flex = '1';
  //           minusHourBtn.style.fontSize = '1.5rem';
  //           minusHourBtn.style.textAlign = 'center';
  //           minusHourBtn.style.color = '#fff';
  //           minusHourBtn.style.background = '#000';
  //           minusHourBtn.style.textAlign = 'center';
  //           minusHourBtn.style.cursor = 'pointer';



  //           containerButtons.appendChild(addHourBtn);
  //           containerButtons.appendChild(minusHourBtn);
  //           day.appendChild(containerButtons);
  //           day.appendChild(containerHours);
  //           day.appendChild(sum);
  //           dayInterface.appendChild(day);
  //         }
  //         week.appendChild(dayInterface);
  //       }
  //       month.appendChild(monthTitle);
  //       month.appendChild(monthDays);
  //       year.appendChild(month);
  //     }
  //     return year;
  //   }




  //   let year = content_calendar();
  //   carouselify(year.children);





  //   let containeryear = document.createElement('div');
  //   containeryear.id = 'containeryear';
  //   containeryear.style.display = 'flex';
  //   containeryear.style.flex = '1';




  //   containeryear.appendChild(year);
  //   table.appendChild(year);
  //   calendarCarousel.appendChild(table);
  //   return calendarCarousel;




  //   function styleCalendar() {
  //     getEl_loopF('calendar', stylecalendar);
  //     function stylecalendar(el) {
  //       el.style.flex = '1';
  //     }
  //   }
  //   styleCalendar();
  // }
