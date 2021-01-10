function focusOnFnc1() {
    $('.input-wrap.split-3').on('focusin', function() {
        $(this).addClass('focus-on');
    });
    $('.input-wrap.split-3').on('focusout', function() {
        $(this).removeClass('focus-on');
    });
    $('.inp-select select').on('focus', function() {
        $(this).parent().addClass('on');
    });
    $('.inp-select select').on('blur', function() {
        $(this).parent().removeClass('on');
    });
    $('.input-wrap .inp-txt').on('change', function() {
        //console.log($(this));
        if ($(this).val() != '') {
            $(this).closest('.input-wrap').addClass('valid');
            if ($(this).attr('name') == 'user-email') {
                var v = $(this).val();
                var reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
                if (reg.test(v)) {
                    $(this).closest('.input-wrap').removeClass('error');
                } else {
                    $(this).closest('.input-wrap').addClass('error');
                }
                // if (v.split('@').length != 2 || v.split('.').length < 2 || v.split('.').length > 3) {
                //     $(this).closest('.input-wrap').addClass('error');
                // } else {
                //     $(this).closest('.input-wrap').removeClass('error');
                // }
            } else if ($(this).attr('name') == 'user-pw-1') {
                var v = $(this).val();
                var reg1 = /^[a-zA-Z0-9!-/]{8,12}$/g;
                var reg2 = /[0-9]+/g;
                var reg3 = /[!-/]+/g;
                console.log(v);
                if (reg1.test(v) && reg2.test(v) && reg3.test(v)) {
                    $(this).closest('.input-wrap').removeClass('error');
                    $('#user-pw-2').prop('disabled', false);
                    $('#user-pw-2').focus();
                } else {
                    $(this).closest('.input-wrap').addClass('error');
                    $('#user-pw-2').prop('disabled', true);
                }
            } else if ($(this).attr('name') == 'user-pw-2') {
                if ($('#user-pw-1').val() != $('#user-pw-2').val()) {
                    $(this).closest('.input-wrap').addClass('error');
                } else {
                    $(this).closest('.input-wrap').removeClass('error');
                }
            } else if ($(this).attr('name') == 'user-name-1') {
                var v = $(this).val();
                var reg = /^[가-힣]{1,2}$/g
                if (reg.test(v)) {
                    $(this).closest('.input-wrap').removeClass('error');
                } else {
                    $(this).closest('.input-wrap').addClass('error');
                }
            } else if ($(this).attr('name') == 'user-name-2') {
                var v = $(this).val();
                var reg = /^[가-힣]{2,6}$/g
                if (reg.test(v)) {
                    $(this).closest('.input-wrap').removeClass('error');
                } else {
                    $(this).closest('.input-wrap').addClass('error');
                }
            }
        } else {
            $(this).closest('.input-wrap').removeClass('valid');
        }
    });
}
$(function() {
    focusOnFnc1();
});