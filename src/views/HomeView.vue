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
          <th>Job</th>
          <th>Status</th>
          <th class="text-center"><span class="material-symbols-outlined cursor-pointer hover:text-neutral"
              onclick="my_modal_3.showModal()">
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
            {{ item.job.company }}
            <br />
            <span class="badge badge-ghost badge-sm">{{ item.job.company }}</span>
          </td>
          <td>{{ item.favorite_color }}</td>
          <th class="grid grid-cols-2 gap-2">
            <span class="material-symbols-outlined text-yellow-500 cursor-pointer" onclick="my_modal_3.showModal()">
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
            <input type="text" class="grow" placeholder="Enter Name" />
          </label>
          <label class="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" class="grow" placeholder="Email" />
          </label>
          <label class="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" class="grow" placeholder="Username" />
          </label>
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
          "job": {
            "company": "Zemlak, Daniel and Leannon",
            "position": "Desktop Support Technician"
          },
          "favorite_color": "Purple",
          "status": "active",
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
          "job": {
            "company": "Carroll Group",
            "position": "Tax Accountant"
          },
          "favorite_color": "Red",
          "status": "inactive",
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
          "job": {
            "company": "Rowe-Schoen",
            "position": "Office Assistant I"
          },
          "favorite_color": "Crimson",
          "status": "unverified",
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
          "job": {
            "company": "Wyman-Ledner",
            "position": "Community Outreach Specialist"
          },
          "favorite_color": "Indigo",
          "status": "active",
          "details": "details"
        }
      ]
    }

  }

}
</script>
<style lang="">

</style>