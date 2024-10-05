import { useState, useEffect } from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'

const ProjectForm = ({ btnText }) => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        }).then(resp => resp.json())
            .then(data => {
                setCategories(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <form className={styles.form_control}>
                <Input
                    type="text"
                    text="Nome do Projeto"
                    name="name"
                    placeholder="Insira o nome do projeto"
                />
                <Input
                    type="number"
                    text="Orçamento do Projeto"
                    name="budget"
                    placeholder="Insira o orçamento total"
                />
                <Select
                    name="category_id"
                    text="Selecione a categoria" 
                    options={categories}
                    
                    />
                <Submit text={btnText}/>
            </form>
        </div>
    )

}

export default ProjectForm