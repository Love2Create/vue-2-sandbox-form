export default{
    data(){
        return{
            value:"",
        }
    },
    props: {
        type: {
            type: String,
            default: "text",
        },
        name: {
            type: String,
            // required: true,
        },
        identifier: {
            type: String,
        },
        label: {
            type: String,
            default: "label",
        },
        bodyText: {
            type: String,
            default: "text",
        }
    },
    methods:{
        emitValue(){
            this.$emit("value-change", this.value);
        }
    }
}