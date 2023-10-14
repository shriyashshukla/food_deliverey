import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

class Aboutus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,

        };

        // console.log('constructor');
    }

    componentDidMount() {
        // console.log('mounted');
    }

    render() {
        // console.log('rendered');
        return (
            <motion.div className='container-max py-16  text-center min-h-[80vh]' initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <img
                    src='https://www.shopurfood.com/blogs/wp-content/uploads/2022/06/How-to-Retain-in-the-Future-of-Online-Food-Delivery-industry.jpg'
                    alt=''
                    className='w-full max-w-[480px] mx-auto rounded-lg'

                />

                <div className='w-[90%] max-w-[480px] mx-auto'>
                    <h1 className='text-3xl my-4'>Paapi Paet 🍔</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit culpa laudantium aperiam optio nam expedita nemo porro eos, eum molestias. Excepturi earum eius aut doloremque! Deserunt consequuntur ea quos?
                    </p>
                    <p>
                        This project was built 🔧 by{' '}
                        <a
                            className='text-orange-600'
                            href='/home'
                        >
                            Shriyash shukla
                        </a>
                    </p>

                    <p>Likes : {this.state.count}</p>

                    <button
                        className='FcLike border my-2 bg-gray-50 p-2 px-4 rounded-md '
                        onClick={() => {
                            this.setState({
                                count: this.state.count + 1,
                            });
                        }}
                    >
                        <FontAwesomeIcon icon={faThumbsUp} /> Like
                    </button>
                </div>
            </motion.div>
        );
    }
}


export default Aboutus
