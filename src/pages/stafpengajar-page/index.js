import {Switch,Route} from 'react-router-dom'
import StafPengajarDetail from './stafpengajar-detail'
import StafPengajarGrid from './stafpengajar-grid'

export default function StafPengajarInd() {
    return (
        <div>
            <Switch>
                <Route path="/staf-pengajar/detail/:id" component={StafPengajarDetail} />
                <Route component={StafPengajarGrid}/>
            </Switch>
        </div>
    )
}
