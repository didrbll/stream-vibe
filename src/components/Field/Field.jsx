import './Field.scss'
import getIdFromTitle from "@/utils/getIdFromTitle";
import classNames from "classnames";

const Field = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    /**
     * undefined (default) | 'email' | 'textarea'
     */
    type,
    autocomplete,
    placeholder,
    isRequired,
    inputMode,
    autocapitalize,
    mask,
    renderBefore,
  } = props

  const ComponentType = type === 'textarea' ? 'textarea' : 'input'

  const extraAttrs = {}

  if (mask) {
    extraAttrs['data-js-input-mask'] = mask
  }

  const fieldControlClassName = 'field__control'

  return (
    <div
      className={classNames(className, 'field')}
    >
      <label
        className="field__label"
        htmlFor={id}
      >
        {label} {isRequired && (
          <span
          className="field__required-star"
          aria-hidden="true"
          >
            *
         </span>
       )}
      </label>
      <div className="field__body">
        {renderBefore?.(fieldControlClassName)}
        <ComponentType
          className={fieldControlClassName}
          id={id}
          type={type}
          autoComplete={autocomplete}
          placeholder={placeholder}
          required={isRequired}
          inputMode={inputMode}
          autoCapitalize={autocapitalize}
          {...extraAttrs}
        />
      </div>
    </div>
  )
}

export default Field