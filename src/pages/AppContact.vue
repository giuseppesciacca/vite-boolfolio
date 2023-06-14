<script>
export default {
    name: 'AppContact'
}
</script>

<template>
    <div class="container py-5">
        <form action="" method="post">
            <div class="mb-3">
                <label for="" class="form-label">Name</label>
                <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId" required>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="email" name="" id="" class="form-control" placeholder="" aria-describedby="helpId" required>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Number Phone</label>
                <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Insert message</label>
                <textarea class="form-control" name="" id="" rows="3" required></textarea>
            </div>

            <button type="reset" class="btn btn-warning me-3">Reset</button>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<style lang="scss" scoped></style>