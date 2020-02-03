<template>
    <div>
        <nav class="navbar navbar-dark bg-primary">
            <a href="/" class="navbar-brand">Example FireVue</a>
        </nav>

        <div class="container">
            <div class="row mt-5">
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-header">
                            Agregar una nueva tarea
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="nueva tarea.." />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <input type="submit" class="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8 text-center">
                    <div class="card">
                        <div class="card-header">
                            Lista Tareas
                        </div>
                        <div class="card-body">
                            <table class="table table-stripped table-border">

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import { db } from '../db.js';
    export default {
        name: 'private',

        data() {
            return {
                document: [],
                newNote: {
                    'author': '',
                    'description': '',
                }
            };
        },

        firestore: {
            listaNotas: db.collection('Task-list'),
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>