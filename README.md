In This website do these things:
1.Smooth Scrolling
2.attach loco scroll css
3. attach locomotive scroll min.js 
4. some code from loco github for js




1. Smooth Scrolling 
- go to locomotive scroll github page[https://github.com/locomotivemtl/locomotive-scroll?tab=readme-ov-file]

2. you see in this page css file file name is locomotive-scroll.css, copy this css file and add this css file in you html link

3. you see the smooth js code, you don't copy the html boilerplat, just down write the some js code copy this js code and add the js file in html script tag

4. you change this code
el: document.querySelector('[data-scroll-container]'),
replace this code to this
el: document.querySelector('#main'),  # main, this is main div id of html 


4 you add the cdn of locomotive-scroll, but how copy this link[https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js]


