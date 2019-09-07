import React from 'react'
import { Form, Select, Input, Button } from 'antd'

const { Option } = Select

const children = [] as any[]
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

function handleChange(value) {
  console.log(`selected ${value}`)
}

const SeedForm: React.FC = () => {
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
  }
  return (
    <div>
      <span className="f2 lexend" style={{ color: '#c48F22' }}>
        Mayfly seed
      </span>
      <Form
        className="pv3"
        onSubmit={e => {
          e.preventDefault()
        }}
        style={{ maxWidth: 400 }}
      >
        <Form.Item label="Place Name">
          <Input
            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Origin Coffee Roasters"
          />
        </Form.Item>
        <Form.Item label="Full Address">
          <Input
            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="65 Charlotte Rd, Shoreditch, London EC2A 3PE"
          />
        </Form.Item>
        <Form.Item label="Relevant tags for this place">
          <Select mode="tags" style={{ width: '100%' }} placeholder="Tags" onChange={handleChange}>
            {children}
          </Select>
        </Form.Item>
        <Form.Item label="Lng">
          <Input
            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="-0.081111"
          />
        </Form.Item>
        <Form.Item label="Lat">
          <Input
            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="51.526389"
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea
            placeholder="Hip, minimalist espresso bar specialising in carefully sourced, single origin coffees."
            autosize={{ minRows: 3, maxRows: 6 }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save & Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SeedForm
