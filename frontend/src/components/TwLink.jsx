import { Link } from "react-router-dom";

const Anchor = (props) => <a {...props} />

export function TwLink({ as, children, ...rest }) {
    const Comp = as === 'anchor' ? Anchor : Link;
    return (
        <Comp className="text-black-500 px-8 py-2 text-lg rounded-md text-sm font-semibold cursor-pointer hover:font-bold" {...rest}>{children}</Comp>
    )
}

