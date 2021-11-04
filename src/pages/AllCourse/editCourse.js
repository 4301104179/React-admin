import React, { useState } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row,
    Col
} from 'reactstrap';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import axios from 'axios';


const Editcourse = ({
    modals,
    setModals,
    updateCourse,
    index,
    coursedFilter
}) => {
    console.log('vo edit prop ', index, coursedFilter)


    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState()
    const [level, setLevel] = useState()
    const [duration, setDuration] = useState('')
    const [price, setPrice] = useState('')
    const [student, setStudent] = useState('')
    const [lesson, setLesson] = useState("")


    const mdParser = new MarkdownIt(/* Markdown-it options */);

    const handleEditorChange = ({ html, text }) => {
        console.log('handleEditorChange', html, text)
        setDescription(text)
    }

    const handle = () => {
        const item = { title, description, type, level, lesson, duration, student, price }
        console.log('vo item', item)
        const cos = []
        const itemShouldUpdate = coursedFilter.find((it, idx) => idx === index[0])
        const filterUpdate = coursedFilter.filter(cf => cf.type === item.type)
        console.log('vo cos', itemShouldUpdate, filterUpdate)
        if(itemShouldUpdate){
            return filterUpdate.map(fl => 
                fl.id === itemShouldUpdate.id ?
                {...fl, title, description, type, level, lesson, duration, student, price}
                : fl
            )
        }
        return filterUpdate
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const item = { title, description, type, level, lesson, duration, student, price }
     console.log('vo coi', handle())
         updateCourse(handle(),item)
    }

    return (
        <div>
            <Modal isOpen={modals} toggle={setModals} size="lg">
                <ModalHeader toggle={setModals}>Edit Topic</ModalHeader>
                <ModalBody>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <FormGroup className="mb-4">
                            <Label className="text-muted initialism"> topic title* </Label>
                            <Input
                                className="rounded-pill bg-transparent border-secondary px-3"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormGroup>
                        <Row>
                            <Col md={12}>
                                <FormGroup className="mb-5">
                                    <Label className="text-muted initialism"> course description </Label>
                                    <MdEditor
                                        style={{ height: '500px' }}
                                        renderHTML={text => mdParser.render(text)}
                                        onChange={handleEditorChange}
                                        value={description}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={6} sm={12}>
                                <FormGroup>
                                    <Input
                                        className="rounded-pill bg-transparent border-secondary px-4"
                                        type="select"
                                        name="select"
                                        id="selectCategory"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                    >
                                        <option className="text-uppercase text-purple"> Select Category * </option>
                                        <option value="Bussiness" selected className="text-uppercase text-primary lh-lg">
                                            Bussiness
                                        </option>
                                        <option value="3D Modeling" className="text-uppercase text-primary">
                                            3D Modeling
                                        </option>
                                        <option value="UX UI Design" className="text-uppercase text-primary">
                                            UX UI Design
                                        </option>
                                        <option value="Mobile Development" className="text-uppercase text-primary">
                                            Mobile Development
                                        </option>
                                        <option value="Software Development" className="text-uppercase text-primary">
                                            Software Development
                                        </option>
                                    </Input>
                                </FormGroup>
                            </Col>

                            <Col xl={6} sm={12}>
                                <FormGroup>
                                    <Input
                                        className="rounded-pill bg-transparent border-secondary px-4"
                                        type="select"
                                        name="selectLevel"
                                        id="selectLevel"
                                        value={level}
                                        onChange={(e) => setLevel(e.target.value)}
                                    >
                                        <option className="text-uppercase text-purple">
                                            Select Level *
                                        </option>
                                        <option value="Beginnner" className="text-uppercase text-primary">
                                            Beginner
                                        </option>
                                        <option value="Intermediate" selected className="text-uppercase text-primary">
                                            Intermediate
                                        </option>
                                        <option value="Advance" className="text-uppercase text-primary">
                                            Advance
                                        </option>
                                        <option value="Pro" className="text-uppercase text-primary">
                                            Pro
                                        </option>
                                    </Input>
                                </FormGroup>
                            </Col>

                            <Col xl={3}>
                                <FormGroup className="mt-5">
                                    <Input
                                        className="rounded-pill bg-transparent border-secondary px-4"
                                        type="text"
                                        name="duration"
                                        id="duration"
                                        placeholder="STUDENT *"
                                        value={student}
                                        onChange={(e) => setStudent(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>

                            <Col xl={3}>
                                <FormGroup className="mt-5">
                                    <Input
                                        className="rounded-pill bg-transparent border-secondary px-4"
                                        type="text"
                                        name="duration"
                                        id="duration"
                                        placeholder="PRICE *"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>

                            <Col xl={3}>
                                <FormGroup className="mt-5">
                                    <Input
                                        className="rounded-pill bg-transparent border-secondary px-4"
                                        type="text"
                                        name="duration"
                                        id="duration"
                                        placeholder="DURATION *"
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>

                            <Col xl={3}>
                                <FormGroup className="mt-5">
                                    <Input
                                        className="rounded-pill bg-transparent border-secondary px-4"
                                        type="text"
                                        name="lessons"
                                        id="lessons"
                                        placeholder="LESSONS *"
                                        value={lesson}
                                        onChange={(e) => setLesson(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup className="mt-5 ">
                            <Input
                                type="file"
                                name="courseThumbnail"
                                id="courseThumbnail"
                            />
                        </FormGroup>

                        <FormGroup className="py-4 text-center">
                            <Button
                                className="text-uppercase bg-purple"
                                type="submit"
                            >
                                update course
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Editcourse
