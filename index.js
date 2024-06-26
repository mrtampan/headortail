const headortail = () => {
    let text = ['head', 'tail'];
    return text[Math.floor(Math.random() * text.length)];
}

const tailCheck = (param) => {
    return param == 'tail';
}

const headCheck = (param) => {
    return param == 'head';
}


module.exports = {headortail, headCheck, tailCheck};