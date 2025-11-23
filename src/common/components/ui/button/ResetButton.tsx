interface IResetButtonProps { 
    onClick: () => void;
}

export const ResetButton = ({onClick}: IResetButtonProps) => {
  return (
    <button className="hover:text-red-400" onClick={onClick}>
        <span className="">Сбросить</span>
    </button>
  )
}
