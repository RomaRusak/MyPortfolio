export default function createElement(elementName,elementAttributes,elementInner) {
    
    let elem = document.createElement(elementName)

    elementAttributes.forEach((attr) => {
        elem.setAttribute(attr[0],attr[1])
    })

    if (elementInner === undefined) return elem 

    elem.innerHTML = elementInner

    return elem
}