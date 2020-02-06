<template>
    <form>
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <input class="form-control" type="email" name="email" placeholder="Introduce your email..." />
                    <input class="form-control" type="password" name="password" placeholder="Introduce password..." />
                </div>                
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <input class="btn btn-primary" type="submit" name="submit" value="submit" />
                </div>                
            </div>
        </div>
        
    </form>
</template>

<script>
    import { db } from "../db.js";
    export default {
        name: "login",

        data() {
            return {
                user_data: {
                    'email': '',
                    'password': '',
                }
            };
        }
    }
</script>

<style scoped lang="scss">
    .container {
        align-content: center;
    }
</style>