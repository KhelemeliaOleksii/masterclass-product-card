console.log("hello");

const refs = {
    card : document.querySelector(".cards--container"),
}

refs.card.addEventListener("click", tasselClickListener);
function tasselClickListener (event) {
    // destruction target from event
    const {target} = event;

    //if click miss on link
    if (target.nodeName !== "A") {
        return;
    }

    //if click is performed on active tassels
    if (target.classList.contains("tassels__item--active") ) {
        return;
    }
    
    //find previous active tassel
    // and remove class '.tassels__item--active'
    const previousActiveTassel = document.querySelector(".tassels__item--active");
    if (previousActiveTassel) {
        previousActiveTassel.classList.remove("tassels__item--active");
    }

    //add to target class '.tassels__item--active'
    target.classList.add("tassels__item--active");


    //find previous active pane
    // and remove class '.panes__item--active'
    const previousActivePane = document.querySelector('.panes__item--active');
    if (previousActivePane) {
        previousActivePane.classList.remove('panes__item--active');
    }

    // get id from target
    const activeId = target.href.split("#")[1];
    // select target pane
    // and  add class '.panes__item--active'
    const paneTarget = document.querySelector(`#${activeId}`);
    paneTarget.classList.add('panes__item--active');
}