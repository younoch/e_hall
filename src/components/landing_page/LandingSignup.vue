<template>
  <section>
    <form action="" v-if="formSwitch">
      <h2>Sign Up as Examine</h2>
      <div class="content">
        <input type="text" name="user_name" id="" placeholder="Full Name" />

        <input type="number" name="user_id" id="" placeholder="University ID" />

        <div>
          <label for="user_batch" class="zero">Batch</label>
          <select name="user_batch" id="" class="zero">
            <option value="#">----</option>
            <option value="e5">E5</option>
            <option value="e6">E6</option>
            <option value="e7">E7</option>
            <option value="e8">E8</option>
            <option value="e9">E9</option>
            <option value="e10">E10</option>
            <option value="r10">R10</option>
            <option value="r11">R11</option>
            <option value="r12">r12</option>
          </select>
        </div>

        <input
          type="email"
          name="user_email"
          id=""
          placeholder="E-mail Address"
        />

        <input type="tel" name="user_tel" id="" placeholder="Contact Number" />

        <input
          type="password"
          name="user-passord"
          id=""
          placeholder="New Password"
        />

        <input
          type="password"
          name="user-passord"
          id=""
          placeholder="Retype New Password"
        />
        <div class="buttons">
          <button type="reset">Reset</button>
          <router-link to="/subjects">
            <button type="submit">Sign up</button>
          </router-link>
        </div>
      </div>
    </form>
    <form action="" v-else>
      <div class="content">
        <h2>Sign In</h2>
        <input
          type="email"
          name="user_name"
          id=""
          placeholder="E-mail Address"
        />
        <input
          type="password"
          name="user-passord"
          id=""
          placeholder="Password"
        />
      </div>
      <router-link to="/subjects">
        <div class="buttons">
          <button type="submit">Sign in</button>
        </div>
      </router-link>
    </form>
  </section>
</template>

<script>
export default {
  props: ["formSwitch"],
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);

  color: #274b7f;
  background-color: #89c4e5;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2 {
  margin-bottom: 40px;
  color: #274b7f;
}
.content {
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: none;
}
input {
  display: block;
  padding: 0;
  margin: 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
}
input::placeholder {
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
}
div > * {
  padding: 4px;
  margin: 4px;
}
label {
  float: left;
}
button {
  color: white;
  background-color: #274b7f;
  margin-top: 8px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
a {
  padding: 0;
  margin: 0;
}

.zero {
  margin: 0;
}
</style>