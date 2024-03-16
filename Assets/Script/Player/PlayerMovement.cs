using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class PlayerMovement : MonoBehaviour
{
	public float moveSpeed = 5f;
	public float rotationSpeed = 100f;
	public float jumpForce = 5f;
	public float gravity = -9.81f;

	private Rigidbody rb;
	private bool isGrounded;

	private void Start()
	{
		rb = GetComponent<Rigidbody>();
		rb.freezeRotation = true; // Ensure rigidbody doesn't tip over
	}

	private void Update()
	{

		float moveHorizontal = Input.GetAxis("Horizontal");
		float moveVertical = Input.GetAxis("Vertical");
		Vector3 move = transform.right * moveHorizontal + transform.forward * moveVertical;
		move.Normalize();

		RotateWithMouse();
	}

	private void FixedUpdate()
	{
		float moveHorizontal = Input.GetAxis("Horizontal");
		float moveVertical = Input.GetAxis("Vertical");

		Vector3 movement = new Vector3(moveHorizontal, 0f, moveVertical).normalized * moveSpeed;
		rb.MovePosition(rb.position + transform.TransformDirection(movement) * Time.fixedDeltaTime);
	}

	private void RotateWithMouse()
	{
		float mouseX = Input.GetAxis("Mouse X") * rotationSpeed * Time.deltaTime;
		Quaternion deltaRotation = Quaternion.Euler(Vector3.up * mouseX);
		rb.MoveRotation(rb.rotation * deltaRotation);
	}
}
