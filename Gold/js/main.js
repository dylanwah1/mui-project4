var storeData = function(data){
    
       
};

$(document).ready(function(){
    
    var addcform = $('#addclient'),
        taterrorslink = $('#taterrorslink')
    ;
    addcform.validate({
        invalidHandler: function(form, validator){
            taterrorslink.click();
            var html = '';
            for(var key in validator.submitted){
                var label = $('label[for^="'+ key +'"]').not('[generated]');
                var legend = label.closest('fieldset').find('ui-controlgroup-label');
                var fieldName = label.length ? legend.text() : label.text();
                html += '<li>'+ fieldName +'</li>';
                
            };
            $("#tattooerrors ul").html(html);
        },
        submitHandler: function(){
            var data = addcform.serializeArray();
           storeData(data);
        }
    });
    
});