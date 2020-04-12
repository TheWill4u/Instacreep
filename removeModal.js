
const mNode = document.body;
const config = { childList: true, attribute: true };
console.log("(Removing that log in shit.)They see me creepin, they hatin~~~")

const onMutate = (mutatedList, observer) => {
    for (let mutation of mutatedList) {
        if (mutation.type === "childList") {
            let lc = mNode.lastChild;
            if (lc === (document.getElementsByClassName("RnEpo Yx5HN    ")[0])) {
                mNode.lastChild.remove()
                observer.disconnect();
            }
        }
    }
}

const observer = new MutationObserver(onMutate);
observer.observe(mNode, config);