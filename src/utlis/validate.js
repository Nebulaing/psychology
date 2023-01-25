// 只能为数字验证
export function isNumber(rule, value, callback) {
    var number = /^\d+$|^\d+[.]?\d+$/
    if (!number.test(value)) {
        callback(new Error("格式有误,只能为数字"));
    } else {
        callback();
    }
}

// 只能为中文校验
export function isChinese(rule, value, callback) {
    var reg = /^[\u4e00-\u9fa5]+$/
    if (!reg.test(value)) {
        callback(new Error("格式有误,只能为中文"));
    } else {
        callback();
    }
}

// 特殊符号验证
export function checkSpecificKey(str) {
    var specialKey = "[`%~!$^&*()=|{}':;',\\[\\].<>/?~！￥……&*（）——|{}【】‘；：”“'。，、？]‘'";
    for (var i = 0; i < str.length; i++) {
        if (specialKey.indexOf(str.substr(i, 1)) != -1) {
            return false;
        }
    }
    return true;
}

// 密码必须由数字、字母、特殊字符组合,请输入8-16位
export function passType(rule, value, callback) {
    var passwordreg = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,16}/
    if (!passwordreg.test(value)) {
        callback(new Error("密码必须由数字、字母、特殊字符组合"));
    } else {
        callback();
    }
}

// 密码不能包含用户名
export function passValue(rule, value, callback) {
    if (value && password != -1) {
        callback('密码不能包含用户名')
    } else {
        callback();
    }
}


// 特殊符号验证
export function isSymbol(rule, value, callback) {
    if (!checkSpecificKey(value)) {
        callback(new Error("格式有误,不支持特殊符号"));
    } else {
        callback();
    }
}

// 用户不能为空
export function checkUser(rule, value, callback) {
    if (!value) {
        callback(new Error('用户不能为空'));
    }
    setTimeout(() => {
        if (Number.isInteger(value)) {
            callback(new Error('勿输入纯数字'));
        } else {
            callback();
        }
    }, 1000);
}

// 密码不能为空
export function checkPass(rule, value, callback) {
    if (value === '') {
        callback(new Error('请输入密码'));
    } else {
        callback();
    }
}
// 邮箱不能为空
export function checkEmail(rule, value, callback) {
    if (value === '') {
        callback(new Error('请输入电话号码'));
    } else {
        callback();
    }
}
// 验证码不能为空
export function checkCode(rule, value, callback) {
    if (value === '') {
        callback(new Error('请输入验证码'));
    } else {
        callback();
    }
}


// 不能包含空格
export function isValidateTxtNonSpec(rule, value, callback) {
    if (value.indexOf(' ') !== -1) {
        callback(new Error('不能包含空格'))
    } else {
        callback()
    }
}

// 用于校验手机号码格式是否正确
export function phoneNumberStyle(rule, value, callback) {
    let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
    if (!reg.test(value)) {
        callback(new Error('手机号码格式不正确'))
    }
    callback()
}

// // 用于校验邮箱格式是否正确
// export function emailType(rule, value, callback) {
//     let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
//     if (!reg.test(value)) {
//         callback(new Error('邮箱格式不正确'))
//     }
//     callback()
// }

export function checkPwdFormat(rule, value, callback){
    if (!value) {
        return callback(new Error('请输入密码'))
    }
    if (!/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/.test(value)) {
        callback(new Error('请输入6-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种'))
    } else {
        callback()
    }
}



