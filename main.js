/*scrolltop*/

$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        var hash = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
        return false;
    });
});
/*form validation*/
function validation(){
        var form=document.getElementById('info-form'), 
        rules={
            'Name':/^[a-z]{2,30}$/i,
            'Last Name':/^[a-z]{2,30}$/i,
            'Email':/^[a-z0-9\._%-]+@[a-z0-9\.-]+\.[a-z]{2,4}$/i,
            'Phone Number':/^[0-9]{9,24}$/,
            'Message':/^[a-z]{2,30}$/i,
        };
        for (var elem in rules)
        {
            if (form[elem])
            {
                if (!rules[elem].test(form[elem].value))
                {
                    alert('Check please ' + elem + '');
                    form[elem].style.background = '#00CCCC';
                    return false;
                }
                else
                {
                    form[elem].style.background = '';
                }
            }
        }
        alert('wszystko ok, wysyłam');
        document.getElementById("info-form").style.display = "none";
        document.getElementById("text_after_form").style.display = "block";
        return true;

    } 


