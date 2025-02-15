import LogoIcon from '../../../public/img/logo.svg'

export default function Logo() {
    return (
        <div className='flex flex-col justify-center w-full px-16 h-57'>
            <img src={LogoIcon} alt='로고 아이콘' className='self-start h-24' />
        </div>
    )
}
