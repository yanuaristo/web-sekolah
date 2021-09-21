import {Switch,Route} from 'react-router-dom'
import ArtikelDetail from './artikel-detail'
import ArtikelGrid from './artikel-grid'

export default function ArtikelInd() {
    return (
        <div>
            <Switch>
                <Route path="/artikel/detail/:id" component={ArtikelDetail} />
                <Route component={ArtikelGrid}/>
            </Switch>
        </div>
    )
}
