export const ChangeOnChange = (foo) => (event) => {
    foo(event.target.value)
}