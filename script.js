//your JS code here. If required.
function add_element () {
    const template = document.createElement('div');
    template.innerHTML = "DOM load success";
    
    document.body.appendChild(template);
}
function myLoad()
{
   add_element();
}