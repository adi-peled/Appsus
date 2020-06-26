import emailHeader from './email-header.cmp.js'
import sideBar from './side-bar.cmp.js'
import emailList from './email-list.cmp.js'

export default {
    name: 'eMailApp',
    template: `
        <section>
            <div class="main">
                 <email-header/>
                <div class="middle">
                    <side-bar/>
                    <router-view class="view-scroll"></router-view>
                </div>
            </div>
        </section>
    `,
    methods: {},
    components: {
        emailHeader,
        sideBar,
        emailList
    },
}