import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe('Status component', () => {
    test('it shows span with status', () => {
        // @ts-ignore
        const component = create(<ProfileStatus status={'Current status'} setProfileStatus={()=>{}} />)
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe('Current status')
    })

    test('show span after render with editMode false', () => {
        // @ts-ignore
        const component = create(<ProfileStatus status={'Current status'} setProfileStatus={()=>{}} />)
        const paragraph = component.root.findByType('p');
        expect(paragraph).not.toBeNull()
    })

    test('show input after render with editMode false', () => {
        // @ts-ignore
        const component = create(<ProfileStatus status={'Current status'}  setProfileStatus={()=>{}}/>)
        expect(() => {
            component.root.findByType('input')
        }).toThrow()
    })

    test('test current status in paragraph', () => {
        // @ts-ignore
        const component = create(<ProfileStatus status={'Current status'} setProfileStatus={()=>{}} />)
        const paragraph = component.root.findByType('p');
        expect(paragraph.children[0]).toBe('Current status')
    })

    test('input should be display in editMode', () => {
        // @ts-ignore
        const component = create(<ProfileStatus status={'Current status'} setProfileStatus={()=>{}}  />)
        const paragraph = component.root.findByType('p');
        paragraph.props.onDoubleClick()
        const input = component.root.findByType('input');
        expect(input.props.value).toBe('Current status');
    })

    test('callback should be called', () => {
        const mockCallback = jest.fn()
        // @ts-ignore
        const component = create(<ProfileStatus status={'Current status'} setProfileStatus={mockCallback} />)
        const instance = component.getInstance();
        // @ts-ignore
        instance.deActivateChangeEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    })
})