<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>Name </th>
          <th>Email</th>
          <th>Gender</th>
          <th>Tech Stack</th>
          <th>Status</th>
          <th class="text-center"><span class="material-symbols-outlined cursor-pointer hover:text-neutral"
              @click="openModal()">
              add
            </span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in userList" :key="index">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img :src="item.name.avatar" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div class="font-bold">{{ item.name.full_name }}</div>
                <div class="text-sm opacity-50">{{ item.name.location }}</div>
              </div>
            </div>
          </td>
          <td>
            {{ item.email }}
          </td>
          <td>
            <span v-if="item.gender" class="material-symbols-outlined text-blue-500 cursor-pointer">
              man
            </span>
            <span v-else class="material-symbols-outlined text-pink-500 cursor-pointer">
              woman
            </span>
          </td>
          <td>
            <span v-for="(pl, index) in item.stack" :key="index" class="badge badge-ghost badge-sm mr-2">{{ pl
              }}</span>
          </td>
          <td>
            <input v-if="item.status != 'unverified'" type="checkbox" class="toggle toggle-primary" checked="checked"
              v-model="item.status" />
            <span v-else>{{ item.status }}</span>
          </td>
          <th class="grid grid-cols-2 gap-2">
            <span class="material-symbols-outlined text-yellow-500 cursor-pointer" @click="openModal(index)">
              edit
            </span>
            <span class="material-symbols-outlined text-red-800 cursor-pointer">
              delete
            </span>
          </th>
        </tr>
      </tbody>
    </table>
    <dialog id="my_modal_3" class="modal">
      <div class="modal-box">
        <form method="dialog" class="grid grid-cols-1 gap-5">
          <div class="avatar indicator">
            <span class="indicator-item badge badge-neutral w-7 h-7"><span
                class="material-symbols-outlined text-yellow-500 cursor-pointer">
                edit
              </span></span>
            <div class="h-20 w-20 rounded-lg">
              <img alt="Tailwind CSS examples"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <label class="input input-bordered flex items-center gap-2">
            <span class="material-symbols-outlined text-xl">
              person
            </span>
            <input type="text" class="grow" placeholder="Enter Name" v-model="currentItem.name" />
          </label>
          <label class="input input-bordered flex items-center gap-2">
            <span class="material-symbols-outlined text-xl">
              mail
            </span>
            <input type="text" class="grow" placeholder="Email" v-model="currentItem.email" />
          </label>
          <div class="form-control">
            <label class="label cursor-pointer py-1">
              <span class="label-text">Male</span>
              <input type="radio" name="radio-10" class="radio checked:bg-blue-500" value="true"
                v-model="currentItem.gender" />
            </label>
            <label class="label cursor-pointer py-1">
              <span class="label-text">Female</span>
              <input type="radio" name="radio-10" class="radio checked:bg-pink-500" value="false"
                v-model="currentItem.gender" />
            </label>
          </div>
          <label class="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
              <path fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd" />
            </svg>
            <input type="password" class="grow" value="password" />
          </label>
          <button class="btn">Submit</button>
          <button class="btn">Cancel</button>
        </form>
      </div>
    </dialog>
  </div>
</template>
<script>
import { cloneDeep } from 'lodash';
export default {
  data() {
    return {

      userList: [
        {
          "selected": false,
          "name": {
            "full_name": "Hart Hagerty",
            "location": "United States",
            "avatar": "https://img.daisyui.com/images/profile/demo/2@94.webp"
          },
          "email": "hart.hagerty@example.com",
          "gender": true,
          "job": {
            "company": "Zemlak, Daniel and Leannon",
            "position": "Desktop Support Technician"
          },
          "favorite_color": "Purple",
          "status": true,
          "stack": ["JavaScript", "Python", "HTML", "CSS"],
          "details": "details"
        },
        {
          "selected": false,
          "name": {
            "full_name": "Brice Swyre",
            "location": "China",
            "avatar": "https://img.daisyui.com/images/profile/demo/3@94.webp"
          },
          "email": "brice.swyre@example.com",
          "gender": true,
          "job": {
            "company": "Carroll Group",
            "position": "Tax Accountant"
          },
          "favorite_color": "Red",
          "status": false,
          "stack": ["Python", "SQL"],
          "details": "details"
        },
        {
          "selected": false,
          "name": {
            "full_name": "Marjy Ferencz",
            "location": "Russia",
            "avatar": "https://img.daisyui.com/images/profile/demo/4@94.webp"
          },
          "email": "marjy.ferencz@example.com",
          "gender": false,
          "job": {
            "company": "Rowe-Schoen",
            "position": "Office Assistant I"
          },
          "favorite_color": "Crimson",
          "status": "unverified",
          "stack": ["Ruby", "PHP"],
          "details": "details"
        },
        {
          "selected": false,
          "name": {
            "full_name": "Yancy Tear",
            "location": "Brazil",
            "avatar": "https://img.daisyui.com/images/profile/demo/5@94.webp"
          },
          "email": "yancy.tear@example.com",
          "gender": false,
          "job": {
            "company": "Wyman-Ledner",
            "position": "Community Outreach Specialist"
          },
          "favorite_color": "Indigo",
          "status": true,
          "stack": ["JavaScript", "C#", "HTML"],
          "details": "details"
        }
      ],
      currentItem: {
        name: null,
        email: null,
        gender: 'male',
        stack: [],
        status: 'unverified',
      },
      resetItem: {
        name: null,
        email: null,
        gender: 'male',
        stack: [],
        status: 'unverified',
      }
    }

  },
  methods: {
    openModal(item) {
      console.log("this.currentItem", this.currentItem)
      console.log("this.userList", this.userList)
      if (item > 0) {
        this.currentItem = cloneDeep(this.userList[item])
      } else {
        this.currentItem = this.resetItem
      }
      console.log("this.currentItem", this.currentItem)
      my_modal_3.showModal()
    }
  }

}
</script>
<style lang="">

</style>