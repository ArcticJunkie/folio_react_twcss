import Typical from 'react-typical';


function TypeWriter() {
    return (
        <Typical
            loop={2}
            wrapper="span"
            steps={[
                2500,
                ' experiences.',
                4000,
                ' interfaces.',
                4000,
                ' websites.',
                6000
            ]}
        />
    );
}

export default TypeWriter;