import React, { useCallback, useLayoutEffect, useState } from 'react'

const getDimensionObject = (node) => {
    const rect = node.getBoundingClientRect();
    return {
        width: rect.width,
        height: rect.height,
    }
}

const useSize = () => {
    const [dimension, setDimension] = useState({});
    const [node, setNode] = useState(null);

    const ref = useCallback(
        (node) => {
            setNode(node);
        },
        [],
    );

    useLayoutEffect(() => {
        if (node) {
            const measure = () => setDimension(getDimensionObject(node));
            measure();
        }
    }, [node])

    return [ref, dimension];
}

export default function Media({ url, active, x, y }) {

    const [ref, { width, height }] = useSize();



    return (
        <div>
            <img className={active && "is-active"} ref={ref} src={url} alt="sample data"
                style={{ transform: `translate(${x - width / 2}px , ${y - height / 2}px)` }}
            />
        </div>
    )
}
