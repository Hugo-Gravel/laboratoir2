export default class Controller {
    constructor(HttpContext, repository = null) {
        this.HttpContext = HttpContext;
        this.repository = repository;
    }
    get(id) {
        if (this.repository != null) {
            if (id !== undefined) {
                if (!isNaN(id)) {
                    let data = this.repository.get(id);
                    if (data != null)
                        this.HttpContext.response.JSON(data);
                    else
                        this.HttpContext.response.notFound(this.repository.model.state.errors);
                } else
                    this.HttpContext.response.badRequest(this.repository.model.state.errors);
            }
            else
                this.HttpContext.response.JSON(this.repository.getAll());
        }
        else
            this.HttpContext.response.notImplemented();
    }
    post(data) {
        data = this.repository.add(data);
        if (this.repository.model.state.isValid) {
            this.HttpContext.response.created(data);
        } else {
            if (this.repository.model.state.conflict)
                this.HttpContext.response.conflict(this.repository.model.state.errors);
            else
                httpContext.response.badRequest(this.repository.model.state.errors);
        }
    }
    put(data) {
        this.repository.update(data);
        if (this.repository.model.state.isValid) {
            this.HttpContext.response.ok();
        } else {
            if (this.repository.model.state.notFound) {
                this.HttpContext.response.notFound(this.repository.model.state.errors);
            } else {
                if (this.repository.model.state.conflict)
                    this.HttpContext.response.conflict(this.repository.model.state.errors)
                else
                    this.HttpContext.response.badRequest(this.repository.model.state.errors);
            }
        }
    }
    remove(id) {
        if (this.repository.remove(id))
            this.HttpContext.response.accepted();
        else
            this.HttpContext.response.notFound();
    }
}
