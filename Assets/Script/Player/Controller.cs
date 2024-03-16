using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class Controller : MonoBehaviour
{

	[SerializeField] private float rotationSpeed = 100f;
	[SerializeField] private float jumpForce = 5f;
	[SerializeField] private float runningSpeed = 10f;
	[SerializeField] private float walkingSpeed = 5f;
	private float moveSpeed = 0f;

	private Rigidbody rb;

	private void Start()
	{
		rb = GetComponent<Rigidbody>();
	}

	private void Update()
	{
		RotateWithMouse();

		if (Input.GetButtonUp("Jump") && isGrounded())
		{
			rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
		}

		bool isGrounded()
		{
			return Physics.Raycast(transform.position, -Vector3.up, 3f);
		}
	}

	private void FixedUpdate()
	{
		float Horizontal = Input.GetAxis("Horizontal");
		float Vertical = Input.GetAxis("Vertical");

		if (Input.GetKey(KeyCode.LeftShift))
		{
			moveSpeed = runningSpeed;
		}
		else
		{
			moveSpeed = walkingSpeed;
		}

		Vector3 movement = new Vector3(Horizontal, 0f, Vertical).normalized * moveSpeed;
		rb.MovePosition(rb.position + transform.TransformDirection(movement) * Time.fixedDeltaTime);
	}

	private void RotateWithMouse()
	{
		float mouseX = Input.GetAxis("Mouse X") * rotationSpeed * Time.deltaTime;
		Quaternion deltaRotation = Quaternion.Euler(Vector3.up * mouseX);
		rb.MoveRotation(rb.rotation * deltaRotation);
	}
}

