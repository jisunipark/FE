interface Props {
    active?: boolean
    value: '전체' | '탈염색' | '염색' | '펌'
}

export default function Chip({ active = false, value }: Props) {
    const style = active
        ? 'text-gray-100 bg-purple-500'
        : 'text-gray-700 bg-gray-100'

    return (
        <div
            className={`rounded-30 px-10 py-6 shadow-[0_0_4px_0_rgba(0,0,0,0.03)] hover:outline-none ${style}`}>
            {value}
        </div>
    )
}
