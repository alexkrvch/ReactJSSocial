import Paginator from "./Paginator";
import {create} from "react-test-renderer";

describe('Paginator', () => {
    test('Show pagination buttons', () => {
        const component = create(<Paginator partSize={20} pageSize={20} totalCount={10000} currentPage={5} onChangePage={()=>{}}/>)
        const root = component.root;
        let spans = root.findAllByType('span')
        expect(spans.length).toBe(20)
    })

    test('Show next / prev buttons', () => {
        const component = create(<Paginator partSize={20} pageSize={20} totalCount={10000} currentPage={20} onChangePage={()=>{}}/>)
        const root = component.root;
        let buttons = root.findAllByType('button')
        expect(buttons.length).toBe(2)
    })

})