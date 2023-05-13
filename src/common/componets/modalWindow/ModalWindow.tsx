// интерфейс для пропсов
import {ReactElement, useEffect} from "react";
import './modalWindow.css'

type ModalPropsType = {
    visible?: boolean
    title: string
    content: ReactElement | string
    footer: ReactElement | string
    onClose: () => void
}

export const ModalWindow = (props: ModalPropsType) => {

    // создаем обработчик нажатия клавиши Esc
    // const onKeydown = ({key}: KeyboardEvent) => {
    //     switch (key) {
    //         case 'Escape':
    //             props.onClose()
    //             break
    //     }
    // }

    // c помощью useEffect цепляем обработчик к нажатию клавиш
    // https://ru.reactjs.org/docs/hooks-effect.html
    // useEffect(() => {
    //     document.addEventListener('keydown', onKeydown)
    //     return () => document.removeEventListener('keydown', onKeydown)
    // })


    // если компонент невидим, то не отображаем его
    // if (!props.visible) return null;

    // или возвращаем верстку модального окна
    return <div className="modal" onClick={props.onClose}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h3  className="modal-title">{props.title}</h3>
                <span className="modal-close" onClick={props.onClose}>
            &times;
          </span>
            </div>
            <div className="modal-body">
                <div style={{textAlign: "center"}} className="modal-content">{props.content}</div>
            </div>
            {props.footer && <div className="modal-footer">{props.footer}</div>}
        </div>
    </div>
}

