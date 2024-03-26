 
import profile from '../assets/profile.png';
const Header
 = () => {
    return (
        <div className='flex justify-between p-10 border-2
        '>
            <h1 className='text-5xl text-bold'>This is Home Pages</h1>
            <img src={profile} alt="" />
        </div>
    );
};
// dopamin detox
// Atomic Habit

export default Header;