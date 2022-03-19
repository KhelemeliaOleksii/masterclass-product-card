export class Cards {
    constructor ({rootSelector, activeTasselClass='activeTasselClass', activePaneClass = 'activePaneClass'}) {
        this._refs = this._getRefs(rootSelector);
        this._activeTasselClass = activeTasselClass;
        this._activePaneClass = activePaneClass; 
        this._bindEvents();
        console.log('hello');
    }
    _getRefs (root) {
        const refs = {};
        //assign root element
        //assign tassels elements
        //assign panes elements
        try {
            refs.card = document.querySelector(`#${root}`); 
            if (!refs.card) {
                throw new Error('rootSelector is invalid');
            }
            refs.tassels = refs.card.querySelector('[data-tassels]');
            refs.panes = refs.card.querySelector('[data-panes]');

            return refs;
    
        } catch (e) {
            console.log(e);
            return undefined;
        } 
    }
    _bindEvents () {
        this._refs.card.addEventListener('click', this._onTasselClick.bind(this));
    }
    _onTasselClick (event) {
        event.preventDefault();
        // destruction target from event
        const {target} = event;

        //if click miss on link
        if (target.nodeName !== 'A') {
            return;
        }
        
        //if click is performed on active tassels
        if (target.classList.contains(`${this._activeTasselClass}`)) {
            return;
        }

        //find previous active tassel
        //remove from the tassel class `${this._activeTasselClass}`
        //remove from the pane class `${this._activePaneClass}`
        const previousActiveTassel = this._refs.tassels.querySelector(`.${this._activeTasselClass}`);
        if (previousActiveTassel) {
            previousActiveTassel.classList.remove(`${this._activeTasselClass}`);
            this._removeActiveClassOnPane (previousActiveTassel);
        }

        // add to target tassel class `${this._activeTasselClass}`
        // add to target pane class `${this._activePaneClass}` 
        target.classList.add(`${this._activeTasselClass}`);
        this._addActiveClassOnPane (target);
        // const activePaneId =  target.href.split('#')[1];
        // const activePane = this._refs.panes.querySelector(`#${activePaneId}`);
        // activePane.classList.add(`${this._activePaneClass}`);
    }
    /* _removeActiveClassOnPane
        in: - 'tassel' is a name of control tassel
        do: - exclude value of id ("previousPaneId") from 'tassel'
            - select corresponding a pane ('previousPane') with the id ('previousPaneId')
            - remove active class from the pane ("previousPane")
    */ 
    _removeActiveClassOnPane (tassel) {
        const previousPaneId = tassel.href.split('#')[1]; 
        const previousPane = this._refs.panes.querySelector(`#${previousPaneId}`);
        previousPane.classList.remove(`${this._activePaneClass}`);
    }
        /* _addActiveClassOnPane
        in: - 'tassel' is a name of control tassel
        do: - exclude value of id ("activePaneId") from 'tassel'
            - select corresponding a pane ('activePane') with the id ('activePaneId')
            - add active class to the pane ('activePane')
    */ 
    _addActiveClassOnPane (tassel) {
        const activePaneId =  tassel.href.split('#')[1];
        const activePane = this._refs.panes.querySelector(`#${activePaneId}`);
        activePane.classList.add(`${this._activePaneClass}`);        
    }
}
