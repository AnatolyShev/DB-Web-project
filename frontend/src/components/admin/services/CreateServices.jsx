import React, {useState} from 'react';
import { saveservice } from '../../../api/admin';
import { token } from '../../../api/auth';

const CreateServices = () => {
    const [NameService, SetNameService] = useState()
    const [AnnotationService, SetAnnotationService] = useState('')
    const [IdType, setIdType] = useState()
    const [Cost, setCost] = useState()

    const [NameType, SetNameType] = useState()
    const [AnnotationType, SetAnnotationType] = useState('')
    const [IdSuperType, SetIdSuperType] = useState()

    const [NameSuperType, SetNameSuperType] = useState()
    const [AnnotationSuperType, SetAnnotationSuperType] = useState('')
    
    
   

    const Token = localStorage.getItem("token")


    const SaveSuper = (e) => {
        e.preventDefault()
        const data = {
            "type": "super", 
            "name": NameSuperType, 
            "annotation": AnnotationSuperType}
        saveservice(Token, data)
    }
    const SaveType = (e) => {
        e.preventDefault()
        const data = {
            "type": "type", 
            "name": NameType, 
            "annotation": AnnotationType,
            "super_type_id": IdSuperType}
        saveservice(Token, data)  
    }
    const SaveService = (e) => {
        e.preventDefault()
        const data = {
            "type": "service", 
            "name": NameService, 
            "annotation": AnnotationService,
            "cost": Cost, 
            "type_id": IdType,}
        saveservice(Token, data)
    }

  return (
    <form>
        <div> Супер тип
            Название: <input value={NameSuperType} onChange={e => SetNameSuperType(e.target.value)}/>
            Аннотация: <input value={AnnotationSuperType}  onChange={e => SetAnnotationSuperType(e.target.value)}/>
            <button onClick={SaveSuper}>Отправить</button> 
        </div>
        <div> Тип
            Название: <input value={NameType} onChange={e => SetNameType(e.target.value)}/>
            Аннотация: <input value={AnnotationType}  onChange={e => SetAnnotationType(e.target.value)}/>
            id супер типа: <input value={IdSuperType}  onChange={e => SetIdSuperType(e.target.value)}/>
            <button onClick={SaveType}>Отправить</button> 
        </div>
        <div> Услуга
            Название: <input value={NameService} onChange={e => SetNameService(e.target.value)}/>
            Аннотация: <input value={AnnotationService}  onChange={e => SetAnnotationService(e.target.value)}/>
            id типа: <input value={IdType}  onChange={e => setIdType(e.target.value)}/>
            цена: <input value={Cost}  onChange={e => setCost(e.target.value)}/>
            <button onClick={SaveService}>Отправить</button> 
        </div>
    </form>
  );
};
export default CreateServices;