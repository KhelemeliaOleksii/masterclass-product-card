console.log("hello");

const refs = {
    card : document.querySelector(".cards--container"),
}

refs.card.addEventListener("click", tasselClickListener);
function tasselClickListener (event) {
    const {target} = event;
    console.log(event);
    // console.log("target:", target);

    if (target.nodeName !== "A") {
        return;
    }

    if (target.classList.contains("tassels__item--active") ) {
        return;
    }
    const activeTassel = document.querySelector(".tassels__item--active");
    activeTassel.classList.remove("tassels__item--active");
    target.classList.add("tassels__item--active");


    const activePaneNonActual = document.querySelector('.panes__item--active');
    activePaneNonActual.classList.remove('panes__item--active');

    const activeId = target.href.split("#")[1];
    const paneActiveActual = document.querySelector(`#${activeId}`);
    paneActiveActual.classList.add('panes__item--active');
    // console.log("target id:", activeId);


}