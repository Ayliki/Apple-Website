import {Html} from '@react-three/drei'

function Loader() {
  return (
    <Html>
        <div className='absolute top-0 left-0 w-full h-full flex justidy-center items-center'>
            <div className='w-[10vw] h-[10vw] rounded-full'>
                Loading...
            </div>
        </div>
    </Html>
  )
}

export default Loader