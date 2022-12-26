<template>
	<div class="modal fade" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<slot name="header"></slot>
					<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<slot></slot>
				</div>
				<div class="modal-footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		methods: {
			show() {
				$(this.$el).modal('show');
			},
			close() {
				$(this.$el).modal('hide');
			}
			// $(...).modal('...') são códigos retirados da página do Bootstrap, versão 4.6, components/modal
			// this.$el traz o elemento root do template do componente, no caso <div class="modal fade" tabindex="-1">...</div>
		}
	};
</script>
