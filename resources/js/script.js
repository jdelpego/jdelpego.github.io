const replaceInnerHtml = (elementToReplace, content) => {
    elementToReplace.innerHTML = content;
};

const showExperience = currentElemenet => {
    let experienceContent = "";
    replaceInnerHtml(currentElement, experienceContent);
};

let headerElement = document.getElementsByTagName(header);
